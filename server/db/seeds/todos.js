export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'Do Laundry', priority: 2, completed: false },
    { task: 'Wash car', priority: 3, completed: false },
    { task: 'Vacuum house', priority: 1, completed: false },
    { task: 'Weed garden', priority: 2, completed: false },
  ])
}
