export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'Do Laundry', priority: 'medium', completed: false },
    { task: 'Wash car', priority: 'high', completed: false },
    { task: 'Vacuum house', priority: 'low', completed: false },
    { task: 'Weed garden', priority: 'medium', completed: false },
  ])
}
