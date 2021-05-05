# datamodel

### user
key         | value
------------|-------
id          | unique generated string
name        | string
password    | encrypted string
token       | unique generated string
address     | Location
email       | unique string
phone       | unique string
restaurants | Restaurant array

### restaurant
key            | value
---------------|-------
id             | unique generated string
name           | string
description    | string
owner          | User
score          | number
address        | Location
food_list      | Food array
does_delivery  | boolean
external_links | dictionary array ex. {name: "our site", link: "github.com"}[]
image          | string

### food
key         | value
------------|-------
id          | unique generated string
name        | string
description | string
score       | number
price       | number
image       | string
category    | string
tags        | string array
info        | dictionary ex. { calories: '50g', sugars: '11g' }
restaurant  | Restaurant


### Location
key       | value
----------|-------
latitude  | number
longitude | number