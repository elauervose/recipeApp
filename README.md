# Day to day

## Which files to edit

### To add a new page:
config/routes.rb

  get "NEW FILE NAME", to: "static#NEWFILENAME"

app/controllers/static_controller.rb [optional]
app/views/static/<page_name>.html.erb
---------------------

### To change the layout:
app/views/layouts/application.html.erb
--------------------

### To change the css/js/img/fonts
public/* [note: this is not technically correct, but one thing at a time]
--------------------

# Running a server

## Start a rails server

rails s



--------------------
## First time install

brew install yarn
rake db:setup
rake db:migrate
rails s
--------------------

## Deployment

_ auto deploy set up from github to heroku _

git push origin master (it'll auto deploy anything from master to the staging app)
FIXME: Fix deployment and local postgres problems
