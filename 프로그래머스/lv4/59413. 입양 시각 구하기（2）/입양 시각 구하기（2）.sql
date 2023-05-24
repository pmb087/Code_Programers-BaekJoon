

# 0부터 23을 값으로 가지는 HOUR 컬럼을 TIME 테이블에 생성함
WITH RECURSIVE TIME AS(
    # 초기 값과 컬럼명
    SELECT 0 AS HOUR
    
    # 컬럼에 값을 추가한다는 의미
    UNION ALL
    
    # 값을 추가할 컬럼, 증감식, 테이블 명 
    SELECT HOUR + 1 FROM TIME
    
    # 증감식의 실행조건
    WHERE HOUR < 23
)

SELECT T.HOUR, IFNULL(COUNT, 0) FROM TIME AS T
LEFT OUTER JOIN (SELECT HOUR(DATETIME) AS HOUR, COUNT(HOUR(DATETIME)) AS COUNT FROM ANIMAL_OUTS GROUP BY HOUR) AS A
ON T.HOUR = A.HOUR