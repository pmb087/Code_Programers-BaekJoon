SELECT 
HISTORY_ID,CAR_ID,

# LEFT를 사용해서 연월일까지만 출력
LEFT(START_DATE,10) AS START_DATE,
LEFT(END_DATE,10) AS END_DATE,

# DATEDIFF 함수를 사용해서 일차이를 계산한다, 대여의 경우 당일을 1일차로 계산하기 때문에 +1을 해준다
# 계산된 대여일이 30일 이상일 경우 장기대여, 아니라면 단기대여를 값으로 하는 RENT_TYPE 컬럼을 추가한다.
IF((DATEDIFF(END_DATE, START_DATE) + 1 >= 30),'장기 대여', '단기 대여') AS RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE LEFT(START_DATE,7) = '2022-09'
ORDER BY HISTORY_ID DESC