export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'Do Laundry', priority: 'medium', completed: false },
    { id: 2, task: 'Wash car', priority: 'high', completed: false },
    { id: 3, task: 'Vacuum house', priority: 'low', completed: false },
    { id: 4, task: 'Weed garden', priority: 'medium', completed: false },
  ])
}
