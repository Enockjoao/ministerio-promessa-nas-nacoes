class EventosController < ApplicationController
  def index
    @proximo_evento = Evento.proximos.first
    @eventos_futuros = Evento.proximos.offset(1)
    @eventos_passados = Evento.ativos.passados.order(data_evento: :desc).limit(6)
  end

  def show
    @evento = Evento.find(params[:id])
  end
end
