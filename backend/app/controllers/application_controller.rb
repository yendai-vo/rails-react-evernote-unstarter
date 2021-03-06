class ApplicationController < ActionController::API
  before_action :authorized
  def get_image_url
    lambda do |image|
      begin
        url_for(image)
      rescue Module::DelegationError
        ''
      end
    end
  end

  def encode_token(payload)
    # don't forget to hide your secret in an environment variable
    JWT.encode(payload, 'my_s3cr3t')
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')[0]
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
      # or nil if we can't decode the token
      user_id = decoded_token['user_id']
      User.find(user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    # render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    render json: { error: 'Please log in'}, status: 401 if !logged_in?
  end
end