SELECT M.MEMBER_NAME, R.REVIEW_TEXT, DATE_FORMAT(R.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE FROM REST_REVIEW AS R
JOIN MEMBER_PROFILE AS M ON R.MEMBER_ID = M.MEMBER_ID
WHERE M.MEMBER_ID IN 
    (SELECT A.MEMBER_ID FROM
    (SELECT MEMBER_ID, COUNT(MEMBER_ID) AS R_COUNT FROM REST_REVIEW
    GROUP BY MEMBER_ID
    ORDER BY R_COUNT DESC LIMIT 1) AS A)
ORDER BY REVIEW_DATE ASC, R.REVIEW_TEXT ASC