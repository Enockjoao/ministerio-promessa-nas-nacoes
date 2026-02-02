class MinisteriosController < ApplicationController
  def index
    redirect_to root_path(anchor: "ministerios")
  end

  def show
    @slug = params[:slug]

    # Dados dos ministérios
    @ministerios = {
      "nacao-praise" => {
        nome: "Nação Praise",
        categoria: "Ministério de Louvor",
        icone: "fa-music",
        descricao: "Levando a presença de Deus através da adoração genuína.",
        versiculo: "Cantai ao Senhor um cântico novo; cantai ao Senhor, todas as terras.",
        referencia: "Salmos 96:1-2"
      },
      "sala-de-guerra" => {
        nome: "Sala de Guerra",
        categoria: "Intercessão",
        icone: "fa-shield-halved",
        descricao: "Centro de oração e batalha espiritual.",
        versiculo: "Orai sem cessar.",
        referencia: "1 Tessalonicenses 5:17"
      }
    }

    @ministerio = @ministerios[@slug]

    redirect_to root_path(anchor: "ministerios") unless @ministerio
  end
end
