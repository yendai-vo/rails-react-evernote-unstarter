class UsersController < ApplicationController
  before_action :set_album, only: [:edit, :update]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
    else
      flash[:error_message] = user.errors.full_messages.join(', ')
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
