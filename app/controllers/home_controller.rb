class HomeController < ApplicationController
  def index
    @eventos_destaque = Evento.proximos.limit(3)
  end
end
