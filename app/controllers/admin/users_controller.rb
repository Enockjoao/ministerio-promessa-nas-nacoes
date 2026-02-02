module Admin
  class UsersController < Admin::ApplicationController
    # Permite atualizar usuário sem mudar a senha
    def update
      if params[:user][:password].blank?
        params[:user].delete(:password)
      end
      super
    end
  end
end
