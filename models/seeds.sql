INSERT INTO providers (providerBusinessName, repFirstName, repLastName, providerEmail, providerPhone, providerAddress, providerCity, providerState, providerZip, businessHours)
VALUES ('Hands On Massage', 'Matt', 'Brennecke', 'matt@handsonmassage.com', '3035551212', '1901 E. Asbury', 'Denver', 'CO', '80208', '{dow: [ 1, 2, 3, 4, 5 ], start: "09:00", end: "17:00",}'),
('New View Photography', 'Geoffrey', 'Godwin-Austen', 'gga@newview.com', '3035551234', '1901 E. Asbury', 'Denver', 'CO', '80208', '{dow: [ 1, 2, 3, 4, 5 ], start: "07:00", end: "15:00",}'),
('Mobile Auto Repair', 'Scott', 'Bender', 'scott@mobilerepair.com', '3035554321', '1901 E. Asbury', 'Denver', 'CO', '80208', '{dow: [ 1, 2, 3, 4, 5 ], start: "06:00", end: "18:00",}');

INSERT INTO clients (clientFirstName, clientLastName, clientEmail, clientPhone)
VALUES ('Matt', 'Brennecke', 'matt@handsonmassage.com', '3035551212'),
('Geoffrey', 'Godwin-Austen', 'gga@newview.com', '3035551234'),
('Scott', 'Bender', 'scott@mobilerepair.com', '3035554321');

INSERT INTO events (event, clientId, providerId)
VALUES ('{title: "Photo discussion",allDay: false,start: "20180919T120000Z",end: "20180919T130000Z",overlap: false,color: "red",textColor: "white"}', 1, 2),
('{title: "Tuneup",allDay: false,start: "20180920T120000Z",end: "20180920T130000Z",overlap: false,color: "red",textColor: "white"}', 2, 3),
('{title: "massage",allDay: false,start: "20180921T120000Z",end: "20180921T130000Z",overlap: false,color: "red",textColor: "white"}', 3, 1)