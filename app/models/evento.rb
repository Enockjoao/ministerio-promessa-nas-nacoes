class Evento < ApplicationRecord
  # Upload de imagem
  has_one_attached :imagem

  # Validações
  validates :titulo, presence: true
  validates :data_evento, presence: true, unless: :recorrente?

  # Scopes para filtrar eventos
  scope :ativos, -> { where(ativo: true) }
  scope :futuros, -> { where("data_evento >= ? OR recorrente = ?", Date.current, true) }
  scope :passados, -> { where("data_evento < ? AND recorrente = ?", Date.current, false) }
  scope :ordenados, -> { order(Arel.sql("recorrente DESC, data_evento ASC")) }

  # Scope combinado para exibição pública
  scope :proximos, -> { ativos.futuros.ordenados }

  # Define valores padrão
  after_initialize :set_defaults, if: :new_record?

  # Dias da semana para eventos recorrentes
  DIAS_SEMANA = %w[Domingo Segunda Terça Quarta Quinta Sexta Sábado].freeze

  # Verifica se é evento de múltiplos dias
  def multiplos_dias?
    data_fim.present? && data_fim != data_evento
  end

  # Formata a exibição da data
  def data_formatada
    if recorrente?
      "Todo(a) #{dia_semana}"
    elsif multiplos_dias?
      "#{data_evento.day} a #{data_fim.day} de #{I18n.l(data_evento, format: '%B')}"
    else
      I18n.l(data_evento, format: :long)
    end
  end

  # Retorna o dia para o badge
  def dia_badge
    if recorrente?
      dia_semana&.first(3) || "Sem"
    else
      data_evento.day
    end
  end

  # Retorna o mês para o badge
  def mes_badge
    if recorrente?
      "Semanal"
    elsif multiplos_dias?
      "#{data_evento.day}-#{data_fim.day}"
    else
      I18n.l(data_evento, format: "%b").upcase
    end
  end

  private

  def set_defaults
    self.ativo = true if ativo.nil?
    self.recorrente = false if recorrente.nil?
  end
end
