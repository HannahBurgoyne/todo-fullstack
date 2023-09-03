export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary
    table.string('task')
    table.string('priority')
    table.boolean('completed')
  })
}

export function down(knex) {
  return knex.schema.dropTable('todos')
}
