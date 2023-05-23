SELECT P.ID, P.NAME, P.HOST_ID FROM PLACES AS P
JOIN (SELECT HOST_ID, COUNT(HOST_ID) AS COUNT FROM PLACES
      GROUP BY HOST_ID 
      HAVING COUNT >= 2) AS C
ON P.HOST_ID = C.HOST_ID
ORDER BY P.ID ASC