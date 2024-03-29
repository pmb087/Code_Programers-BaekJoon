SELECT 
U.USER_ID,
U.NICKNAME,
CONCAT(U.CITY, ' ', U.STREET_ADDRESS1, ' ', U.STREET_ADDRESS2) AS 전체주소,
CONCAT(SUBSTRING(U.TLNO FROM 1 FOR 3), '-', SUBSTRING(U.TLNO FROM 4 FOR 4), '-', SUBSTRING(U.TLNO FROM 8 FOR 4)) AS 전화번호 
FROM USED_GOODS_USER AS U
JOIN USED_GOODS_BOARD AS B
ON U.USER_ID = B.WRITER_ID
GROUP BY U.USER_ID
HAVING COUNT(B.BOARD_ID) >= 3
ORDER BY U.USER_ID DESC