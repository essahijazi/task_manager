# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

essa = User.create(first_name: "Essa", last_name: "Hijazi", username: "essa", password: "essa", isAdmin: true)
jared = User.create(first_name: "Jared", last_name: "Chamberlain", username: "jared", password: "jared", isAdmin: false)
august = User.create(first_name: "August", last_name: "Giles", username: "august", password: "august", isAdmin: false)
anthony = User.create(first_name: "Anthony", last_name: "Chang", username: "anthony", password: "anthony", isAdmin: false)
susanna = User.create(first_name: "Susanna", last_name: "Kosonen", username: "susanna", password: "susanna", isAdmin: false)
brittany = User.create(first_name: "Brittany", last_name: "Barrow", username: "brittany", password: "brittany", isAdmin: false)
will = User.create(first_name: "Will", last_name: "Ley", username: "will", password: "will", isAdmin: false)
oren = User.create(first_name: "Oren", last_name: "Magid", username: "oren", password: "oren", isAdmin: false)


# t1 = Task.create(admin_id: 2, description: "testing", due_by: DateTime.now, completed: false)
# a1 = Assignment.create(task_id: 1, employee_id: 1)    