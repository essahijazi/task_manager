# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(first_name: "Bruno", last_name: "Gonzalez", username: "brunog", password: "password")
u2 = User.create(first_name: "Essa", last_name: "Hijazi", username: "essah", password: "password")

t1 = Task.create(admin_id: 2, description: "testing", due_by: DateTime.now, completed: false)


a1 = Assignment.create(task_id: 1, employee_id: 1)