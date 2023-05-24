SELECT T.FLAVOR FROM FIRST_HALF AS T
JOIN (SELECT FLAVOR, SUM(TOTAL_ORDER) AS J_O FROM JULY GROUP BY FLAVOR) AS J
ON T.FLAVOR = J.FLAVOR
ORDER BY (T.TOTAL_ORDER + J_O) DESC LIMIT 3