module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_user!
    before_action :authorize_admin!

    helper_method :logout_path

    private

    def authorize_admin!
      unless current_user.admin? || current_user.pastor? || current_user.lider?
        redirect_to root_path, alert: "Você não tem permissão para acessar esta área."
      end
    end

    def logout_path
      destroy_user_session_path
    end
  end
end
