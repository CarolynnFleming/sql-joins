-- find all film titles rented out by customers who live in the city of Dundee
-- Similar to exercise 6 but you need a few more joins to get the city name

SELECT

title

FROM

film
 
RIGHT JOIN

inventory 

ON


film.film_id = inventory.film_id

RIGHT JOIN

rental 

ON 

inventory.inventory_id = rental.inventory_id

RIGHT JOIN 

customer

ON

rental.customer_id = customer.customer_id

RIGHT JOIN

address

ON

customer.address_id = address.address_id

RIGHT JOIN

city

ON

address.city_id = city.city_id

WHERE

city.city = 'Dundee'