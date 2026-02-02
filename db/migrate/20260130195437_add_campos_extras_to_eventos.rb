class AddCamposExtrasToEventos < ActiveRecord::Migration[8.1]
  def change
    add_column :eventos, :data_fim, :date
    add_column :eventos, :recorrente, :boolean
    add_column :eventos, :dia_semana, :string
  end
end
