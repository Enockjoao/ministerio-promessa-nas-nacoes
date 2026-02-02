Rails.application.routes.draw do
  # Painel Admin (protegido)
  namespace :admin do
    resources :eventos
    resources :users
    root to: "eventos#index"
  end

  # Autenticação
  devise_for :users

  # Páginas públicas
  root "home#index"

  # Eventos públicos
  resources :eventos, only: [ :index, :show ]

  resources :ministerios, only: [ :index, :show ], param: :slug

  # Health check
  get "up" => "rails/health#show", as: :rails_health_check
end
