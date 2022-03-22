-- find all film titles rented out by customers who live in the country of Peru
-- Similar to exercise 7 with an additional join to get country name

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

RIGHT JOIN

country

ON

city.country_id = country.country_id

WHERE

country.country = 'Peru'
