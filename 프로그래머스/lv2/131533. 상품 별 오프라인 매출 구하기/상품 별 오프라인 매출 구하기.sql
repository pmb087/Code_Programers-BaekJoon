SELECT PRODUCT_CODE, SALES_AMOUNT * PRICE AS SALES FROM
(SELECT P.PRODUCT_ID, SUM(O.SALES_AMOUNT) AS SALES_AMOUNT, P.PRODUCT_CODE, P.PRICE
 FROM OFFLINE_SALE AS O 
 JOIN PRODUCT AS P
 ON O.PRODUCT_ID = P.PRODUCT_ID
 GROUP BY P.PRODUCT_ID) AS A
ORDER BY SALES DESC, PRODUCT_CODE