class CreateEventos < ActiveRecord::Migration[8.1]
  def change
    create_table :eventos do |t|
      t.string :titulo
      t.text :descricao
      t.date :data_evento
      t.time :horario
      t.string :local
      t.boolean :ativo

      t.timestamps
    end
  end
end
