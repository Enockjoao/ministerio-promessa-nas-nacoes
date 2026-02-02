require "administrate/base_dashboard"

class EventoDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    titulo: Field::String,
    descricao: Field::Text,
    data_evento: Field::Date,
    data_fim: Field::Date,
    horario: Field::Time,
    local: Field::String,
    recorrente: Field::Boolean,
    dia_semana: Field::Select.with_options(
      searchable: false,
      collection: ->(field) { Evento::DIAS_SEMANA }
    ),
    ativo: Field::Boolean,
    imagem: Field::ActiveStorage,
    created_at: Field::DateTime,
    updated_at: Field::DateTime
  }.freeze

  COLLECTION_ATTRIBUTES = %i[
    id
    titulo
    data_evento
    recorrente
    ativo
  ].freeze

  SHOW_PAGE_ATTRIBUTES = %i[
    id
    titulo
    descricao
    data_evento
    data_fim
    horario
    local
    recorrente
    dia_semana
    ativo
    imagem
    created_at
    updated_at
  ].freeze

  FORM_ATTRIBUTES = %i[
    titulo
    descricao
    data_evento
    data_fim
    horario
    local
    recorrente
    dia_semana
    ativo
    imagem
  ].freeze

  COLLECTION_FILTERS = {}.freeze

  def display_resource(evento)
    evento.titulo
  end
end
