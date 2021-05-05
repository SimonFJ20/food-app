# datamodel

### user
key         | value
------------|-------
id          | unique generated string
name        | non-unique string
password    | non-unique encrypted string
token       | unique generated string
address     | Location
email       | unique string
phone       | unique string
restaurants | Restaurant array

### restaurant
key            | value
---------------|-------
id             | unique generated string
name           | non-unique string
description    | non-unique string
owner          | User
score          | non-unique number
address        | Location
food_list      | Food array
does_delivery  | boolean
external_links | string-dictionary array [ {name: string, link: string } ]
image          | non-unique string

### food
key         | value
------------|-------
id          | unique generated string
name        | non-unique string
description | non-unique string
score       | non-unique number
price       | non-unique number
image       | non-unique string
tags        | string array
restaurant  | Restaurant


### Location
key       | value
----------|-------
latitude  | non-unique number
longitude | non-unique number