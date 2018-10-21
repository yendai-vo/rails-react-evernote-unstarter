class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user, only: [:edit, :update]
  
  def index
    @users = User.all
    render json: @users
  end

  # def new
  #   @user = User.new
  # end
  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      puts @user
      puts @token 
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def edit
  end

private

  def user_params
    params.permit(:id, :first_name, :last_name, :username, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
