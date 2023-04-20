import time
import requests
from selenium import webdriver
from bs4 import BeautifulSoup

# webdriver를 이용해 Chrome 브라우저 열기
driver = webdriver.Chrome('chromedriver.exe') # ChromeDriver 경로 설정

# 페이지 이동
url = "https://serieson.naver.com/v3/movie"
driver.get(url)

# 페이지가 모두 로딩될 때까지 3초 기다리기
time.sleep(3)

# 페이지 소스 가져오기
html = driver.page_source

# BeautifulSoup을 이용해 HTML 파싱
soup = BeautifulSoup(html, "html.parser")

# 장르 목록 가져오기
genre_list = soup.find("ul", {"class" : "CategoryFinderContent_rowList__FMqA2"}).find_all("li")

for genre in genre_list:
    # 장르명 가져오기
    genre_name = genre.text.strip()

    # 전체를 제외한 나머지 장르의 경우 해당 장르 페이지로 이동하여 영화 리스트 출력
    if genre_name != "전체":
        print(genre_name)
        # 해당 장르 페이지로 이동 - 분류: 인기 페이지
        genre_url = "https://serieson.naver.com" + genre.find("a")['href'] + "?sortType=POPULARITY_DESC&price=all"
        print(genre_url)
        driver.get(genre_url)
        time.sleep(3)

        # 페이지 소스 가져오기
        html = driver.page_source

        # BeautifulSoup을 이용해 HTML 파싱
        soup = BeautifulSoup(html, "html.parser")

        # 영화 리스트 가져오기
        movie_list = soup.find_all("span", {"class" : "Title_title__s9o0D"})
        movie_poster = soup.find_all("img", {"class":"Thumbnail_image__TxHd0"})
    
        for idx, image in enumerate(movie_poster):
            image_url = image["src"]
            print(image_url)

            image_res = requests.get(image_url)
            image_res.raise_for_status()

            with open("movie_{}_{}.jpg".format(genre_name, idx+1), "wb") as f:
                f.write(image_res.content)

            if idx >= 2: # 상위 3개만 다운
                break

        if movie_list:
            for i, movie in enumerate(movie_list):
                if i == 5:
                    break
                title = movie.text.strip()
                print("- " + title)

        else:
            print("영화 리스트가 없습니다.")

    # 각 장르별 출력 사이에 구분선 출력
    print("="*50)

# 브라우저 닫기
driver.quit()