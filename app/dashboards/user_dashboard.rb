require "administrate/base_dashboard"

class UserDashboard < Administrate::BaseDashboard
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    email: Field::String,
    role: Field::Select.with_options(searchable: false, collection: ->(field) { User.roles.keys }),
    password: Field::Password,
    created_at: Field::DateTime,
    updated_at: Field::DateTime
  }.freeze

  COLLECTION_ATTRIBUTES = %i[
    id
    email
    role
  ].freeze

  SHOW_PAGE_ATTRIBUTES = %i[
    id
    email
    role
    created_at
    updated_at
  ].freeze

  FORM_ATTRIBUTES = %i[
    email
    role
    password
  ].freeze

  COLLECTION_FILTERS = {}.freeze

  def display_resource(user)
    user.email
  end
end
