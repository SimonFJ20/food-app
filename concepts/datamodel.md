# datamodel

### user
key         | value
------------|-------
id          | unique generated string
name        | non-unique string
password    | non-unique encrypted string
token       | unique generated string
address     | Location
restaurants | Restaurant array
email       | non-unique string
phone       | non-unique string

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
display_image  | non-unique string

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


### location
derived from other api most likely google maps