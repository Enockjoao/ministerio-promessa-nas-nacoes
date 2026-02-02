class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable
         :lockable

  # Roles: 0 = admin, 1 = pastor, 2 = lider
  enum :role, { admin: 0, pastor: 1, lider: 2 }

  # Define role padrão ao criar usuário
  after_initialize :set_default_role, if: :new_record?

  private

  def set_default_role
    self.role ||= :lider
  end
end
