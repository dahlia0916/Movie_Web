/*{name: 'ISTJ', value: 0, key: 0},
{name: 'ISTP', value: 0, key: 1},
{name: 'ISFJ', value: 0, key: 2},
{name: 'ISFP', value: 0, key: 3},
{name: 'INTJ', value: 0, key: 4},
{name: 'INTP', value: 0, key: 5},
{name: 'INFJ', value: 0, key: 6},
{name: 'INFP', value: 0, key: 7},
{name: 'ESTJ', value: 0, key: 8},
{name: 'ESTP', value: 0, key: 9},
{name: 'ESFJ', value: 0, key: 10},
{name: 'ESFP', value: 0, key: 11},
{name: 'ENTJ', value: 0, key: 12},
{name: 'ENTP', value: 0, key: 13},
{name: 'ENFJ', value: 0, key: 14},
{name: 'ENFP', value: 0, key: 15},
*/ 

const qnaList = [
    {
        q: '1. 이번 주말 오랜만에 영화를 보려고 한다! 당신의 선택은?',
        a: [
            {answer: 'a. 팝콘 + 버터구이 오징어 + 콜라 먹으면서 봐야지! 양 손 푸짐하게 준비한다.', type: ['ESTJ','ESFP','ENFP','ENTP','ESFJ','ESTP','ENFJ','ENTJ']},
            {answer: 'b. 아무것도 안 먹어야 영화에 집중이 잘 돼! 오로지 영화에만 집중한다.', type: ['ISTJ','ISTP','INFJ','INTJ','ISFJ','ISFP','INFP','INTP']}
        ]
    },
    {
        q: '2. 꿈에서 작은 토끼가 구슬을 건네며 당신에게 "이걸 먹으면 다른 차원의 문을 열 수 있어! 그곳에선 꿈도 현실이 되는 곳이야!"라고 말했다 당신은...',
        a: [
            {answer: 'a. 아... 꿈이네', type: ['ISTJ','ISTP','ISFJ','ISFP','ESTJ','ESFP','ESFJ','ESTP']},
            {answer: 'b. 이걸 먹으면 다른 차원의 문이 열린다고? 어떤 곳이지? 너무 궁금한데? 근데 이 구슬 먹을 수 있긴 한 거야?', type: ['INFJ','INTJ','INFP','INTP','ENFP','ENTP','ENFJ','ENTJ']}
        ]
    },
    {
        q: '3. 오랜만에 혼자 보내는 주말! 오늘은 TV로 어떤 영화를 볼까?',
        a: [
            {answer: 'a. 평화롭고 잔잔한 추억 떠오르는 감성적인 영화', type: ['INFJ','ISFJ','ISFP','INFP','ESFP','ENFP','ESFJ','ENFJ']},
            {answer: 'b. 정의롭고 논리적이라 잘 나가는 변호사의 일상을 다룬 영화', type: ['ISTJ','ISTP','INTJ','INTP','ESTJ','ENTP','ESTP','ENTJ']}
        ]
    },
    {
        q: '4. 추리 영화를 보며 누가 범인일까 고민중이다. 범인은 바로 너야! 범인의 정체가 드러났다. 당신의 반응은?',
        a: [
            {answer: 'a.역시 나의 추리 실력은 빗나가지 않지.', type: ['ISTJ','INFJ','INTJ','ISFJ','ESTJ','ESFJ','ENFJ','ENTJ']},
            {answer: 'b. 저 사람이 범인이라고? 반전이 있을 줄 알았는데...', type: ['ISTP','ISFP','INFP','INTP','ESFP','ENFP','ENTP','ESTP']}
        ]
    },
    {
        q: '5. 드라마의 마지막화를 보는 중이다..',
        a: [
            {answer: 'a. 갑자기 저렇게 끝난다고?? 2탄 나오려나!!', type: ['ISTP','ISFP','INFP','INTP','ESFP','ENFP','ENTP','ESTP']},
            {answer: 'b. 내 예상대로 흘러가네. 역시 마무리는 클리셰로 완결이 나야지.', type: ['ISTJ','INFJ','INTJ','ISFJ','ESTJ','ESFJ','ENFJ','ENTJ']}
        ]       
    },
    {
        q: '6. 연인이 당신에게 편지를 건넸다! 사귀고 처음 받는 연애 편지(두근 두근) 어떤 내용이 있었으면 좋겠는가..?',
        a: [
            {answer: 'a. 지금 느끼는 감정과 가감없는 직관적인 표현으로 적은 편지', type: ['ISTJ','ISTP','ISFJ','ISFP','ESTJ','ESFP','ESFJ','ESTP']},
            {answer: 'b. 미래의 우리의 무습을 그리며 비유적인 표현으로 사랑을 품어낸 편지', type: ['INFJ','INTJ','INFP','INTP','ENFP','ENTP','ENFJ','ENTJ']}
        ]
    },
    {
        q: '7. 당신이 더 좋아하는 영화 주인공 스타일은?',
        a: [
            {answer: 'a. 어벤져스 같은 세계를 구하는 히어로', type: ['ISTJ','ISTP','INTJ','INTP','ESTJ','ENTP','ESTP','ENTJ']},
            {answer: 'b. 조커같은 사연 있는 악당', type: ['INFJ','ISFJ','ISFP','INFP','ESFP','ENFP','ESFJ','ENFJ']}
        ]
    },
    {
        q: '8. 신호를 기다리던 당신의 눈 앞에 산신령이 나타났다! "홀홀홀! 정직한 모범 시민이구나. 그래, 내가 초능력을 하나 주마. 무엇을 원하느냐?"라고 묻는다면 당신은...',
        a: [
            {answer: 'a. 초능력이요? 어떤게 가능한데요? 미래로도 갈 수 있나요?', type: ['INFJ','INTJ','INFP','INTP','ENFP','ENTP','ENFJ','ENTJ']},
            {answer: 'b. 뭐야... 사이빈가..?', type: ['ISTJ','ISTP','ISFJ','ISFP','ESTJ','ESFP','ESFJ','ESTP']}
        ]
    },
    {
        q: '9. 썸남/썸녀가 영화를 같이 보자는데... 어떤 영화를 선택해야 할까?',
        a: [
            {answer: 'a. 같이 웃을 수 있는 영화가 최고지! 코미디 + 로맨스 영화', type: ['ESTJ','ESFP','ENFP','ENTP','ESFJ','ESTP','ENFJ','ENTJ']},
            {answer: 'b. 이 사람과 가치관이 비슷한지 궁금하다. 철학적인 내용의 드라마 영화', type: ['ISTJ','ISTP','INFJ','INTJ','ISFJ','ISFP','INFP','INTP']}
        ]
    },
    {
        q: '10. 영화가 끝난 후 뒷자리에 앉은 아저씨가 갑자기 기립 박수를 친다! 당신은...',
        a: [
            {answer: 'a. 뭐야 시끄럽게... 얼른 자리를 정리하고 나간다.', type: ['ISTJ','ISTP','INFJ','INTJ','ISFJ','ISFP','INFP','INTP']},
            {answer: 'b. 진짜 감동이었어ㅠㅠ 나도 같이 기립 박수를 친다.', type: ['ESTJ','ESFP','ENFP','ENTP','ESFJ','ESTP','ENFJ','ENTJ']}
        ]
    },
    {
        q: '11. 영화 속 주인공이 자유를 찾아 자살을 하며 영화가 막을 내린다. 당신이 생각하는 영화의 엔딩은?',
        a: [
            {answer: 'a. 주인공이 이제 자유를 얻었구나. 해피엔딩이다.', type: ['ISTP','ISFP','INFP','INTP','ESFP','ENFP','ENTP','ESTP']},
            {answer: 'b. 주인공이 결국 죽었네... 새드엔딩이다.', type: ['ISTJ','INFJ','INTJ','ISFJ','ESTJ','ESFJ','ENFJ','ENTJ']}
        ]
    },
    {
        q: '12. 영화가 끝나고 집에 가는 길... 검은 봉고차에서 정장을 입은 사람들이 우수수 내린다. 당신의 반응은?',
        a: [
            {answer: 'a. 멋있다... 배우들인가?', type: ['INFJ','ISFJ','ISFP','INFP','ESFP','ENFP','ESFJ','ENFJ']},
            {answer: 'b. 무섭다... 깡패 조직인가?', type: ['ISTJ','ISTP','INTJ','INTP','ESTJ','ENTP','ESTP','ENTJ']}
        ]
    }
]

//var imgURL = 'img/image-' + point + '.png';

const infoList = [
    {
        name:'ISTJ',
        desc:'다큐멘터리',
        img1: '다큐멘터리/movie_다큐멘터리_1.jpg',
        img2: '다큐멘터리/movie_다큐멘터리_2.jpg',
        img3: '다큐멘터리/movie_다큐멘터리_3.jpg'
    },
    {
        name:'ISTP',
        desc:'공포스릴러 / 다큐멘터리',
        img1: '공포스릴러/movie_공포스릴러_1.jpg',
        img2: '다큐멘터리/movie_다큐멘터리_1.jpg',
        img3: '공포스릴러/movie_공포스릴러_2.jpg'
    },
    {
        name:'ISFJ',
        desc:'멜로',
        img1: '멜로/movie_멜로_1.jpg',
        img2: '멜로/movie_멜로_2.jpg',
        img3: '멜로/movie_멜로_3.jpg'
    },
    {
        name:'ISFP',
        desc:'드라마 / 멜로',
        img1: '멜로/movie_멜로_1.jpg',
        img2: '멜로/movie_멜로_2.jpg',
        img3: '드라마/movie_드라마_1.jpg'
    },
    {
        name:'INTJ',
        desc:'SF판타지 / 드라마',
        img1: 'SF판타지/movie_SF판타지_1.jpg',
        img2: '드라마/movie_드라마_1.jpg',
        img3: 'SF판타지/movie_SF판타지_2.jpg'
    },
    {
        name:'INTP',
        desc:'애니메이션 / SF판타지',
        img1: '애니메이션/movie_애니메이션_1.jpg',
        img2: 'SF판타지/movie_SF판타지_1.jpg',
        img3: 'SF판타지/movie_SF판타지_2.jpg'
    },
    {
        name:'INFJ',
        desc:'공포스릴러 / SF판타지',
        img1: 'SF판타지/movie_SF판타지_1.jpg',
        img2: 'SF판타지/movie_SF판타지_2.jpg',
        img3: '공포스릴러/movie_공포스릴러_1.jpg'
    },
    {
        name:'INFP',
        desc:'멜로 / 코미디 / 애니메이션',
        img1: '멜로/movie_멜로_1.jpg',
        img2: '코미디/movie_코미디_1.jpg',
        img3: '애니메이션/movie_애니메이션_1.jpg'
    },
    {
        name:'ESTJ',
        desc:'액션',
        img1: '액션/movie_액션_1.jpg',
        img2: '액션/movie_액션_2.jpg',
        img3: '액션/movie_액션_3.jpg'
    },
    {
        name:'ESTP',
        desc:'드라마 / 액션',
        img1: '드라마/movie_드라마_1.jpg',
        img2: '액션/movie_액션_1.jpg',
        img3: '액션/movie_액션_2.jpg'
    },
    {
        name:'ESFJ',
        desc:'코미디',
        img1: '코미디/movie_코미디_1.jpg',
        img2: '코미디/movie_코미디_2.jpg',
        img3: '코미디/movie_코미디_3.jpg'
    },
    {
        name:'ESFP',
        desc:'코미디 / 드라마',
        img1: '코미디/movie_코미디_1.jpg',
        img2: '드라마/movie_드라마_1.jpg',
        img3: '코미디/movie_코미디_2.jpg'
    },
    {
        name:'ENTJ',
        desc:'독립영화 / SF판타지',
        img1: '독립영화/movie_독립영화_1.jpg',
        img2: '독립영화/movie_독립영화_2.jpg',
        img3: 'SF판타지/movie_SF판타지_1.jpg'
    },
    {
        name:'ENTP',
        desc:'SF판타지 / 공포스릴러',
        img1: 'SF판타지/movie_SF판타지_1.jpg',
        img2: 'SF판타지/movie_SF판타지_2.jpg',
        img3: '공포스릴러/movie_공포스릴러_1.jpg'
    },
    {
        name:'ENFJ',
        desc:'드라마',
        img1: '드라마/movie_드라마_1.jpg',
        img2: '드라마/movie_드라마_2.jpg',
        img3: '드라마/movie_드라마_3.jpg'
    },
    {
        name:'ENFP',
        desc:'멜로 / 코미디 / 드라마',
        img1: '멜로/movie_멜로_1.jpg',
        img2: '코미디/movie_코미디_1.jpg',
        img3: '드라마/movie_드라마_1.jpg'
    }

]