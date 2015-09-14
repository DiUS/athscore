Organisers
 - Name
 - Address
 - Contact Details (email, phone nums)
 - Description
 - Contacts (names)
 - Competitions

Competition
 - Name (Year)
 - Description
 - Year
 - Club (def)

Team
  - Name
  - Age
  - Competition (ref)

Grade
 - age_group
 - sex
 - name
 - description

Member
  - name
  - age
  - description
  - club
  - team (ref)
  - competition (ref)

Event
  - name
  - description
  - competition (ref)
  - event_type (enum)
  - grade (soft enum)

Score
  - member (ref)
  - event (ref)
  - date
  - value (score)
  - competition (ref)
