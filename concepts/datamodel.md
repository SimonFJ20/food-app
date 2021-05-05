# datamodel

### user
key      | value
---------|-------
name     | non-unique string
password | non-unique encrypted string
id       | unique generated string
token    | unique generated string
address  | Location
email    | non-unique string
phone    | non-unique string

### restaurant
key            | value
---------------|-------
name           | non-unique string
description    | non-unique string
id             | unique generated string
owner          | User
score          | non-unique number
address        | Location
food_list      | Food array
does_deliver   | boolean
external_links | string-dictionary array [ {name: string, link: string } ]
display_image  | non-unique string

### food
key             | value
----------------|-------
name            | non-unique string
description     | non-unique string
id              | unique generated string
score           | non-unique number
price           | non-unique number
image           | non-unique string
tags            | string array
restaurant      | Restaurant


### location