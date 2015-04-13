class SessionSerializer < ActiveModel::Serializer

  attributes :token_type, :student_id, :access_token

  def token_type
    'Bearer'
  end

end
