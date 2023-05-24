SELECT * FROM
(SELECT 
YEAR(A.SALES_DATE) AS YEAR,
MONTH(A.SALES_DATE) AS MONTH,
COUNT(DISTINCT A.USER_ID) AS PUCHASED_USERS,
ROUND((COUNT(DISTINCT A.USER_ID) / (SELECT COUNT(JOINED) FROM USER_INFO WHERE JOINED LIKE '2021%')),1) AS PUCHASED_RATIO 
FROM 
    (SELECT U.USER_ID, S.SALES_DATE, U.JOINED FROM ONLINE_SALE AS S
     JOIN USER_INFO AS U ON U.USER_ID = S.USER_ID
     WHERE U.JOINED LIKE '2021%') AS A
     GROUP BY YEAR, MONTH) AS B
ORDER BY YEAR ASC, MONTH ASC

# select year(sales_date) as YEAR,
#         month(sales_Date) as MONTH,
#         count(distinct user_id) as puchased_users,
#         round(count(distinct user_id)/ (SELECT count(distinct user_id)
#                                         from user_info
#                                         where year(joined) = '2021'), 1) as puchased_ratio
# from online_sale
# where user_id in (SELECT distinct user_id 
#                   from user_info
#                   where year(joined) = '2021')
# group by month(sales_Date)
# order by YEAR asc, MONTH asc