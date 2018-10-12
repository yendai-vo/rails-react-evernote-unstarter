class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    user = User.create!(params_user)
    session[:user_id] = user.id
    redirect_to root_path
  end

  def edit

  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def params_user
    params.require(:user).permit(:id, :first_name, :last_name, :username, :password, :u_image)
  end
end
