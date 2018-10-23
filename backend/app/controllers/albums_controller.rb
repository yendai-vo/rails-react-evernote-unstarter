class AlbumsController < ApplicationController
  before_action :set_album, only: [:edit, :update]

  def index
    albums = current_user.albums.all
    render json: albums
  end

  def create
    # debugger
    album = Album.create(album_params)
    # file = params[:picture].tempfile.path
    # url = url_for(album.picture)
    # render json: {album: album, filename: "#{file}"}
    render json: album
  end

  def edit
    
  end

  def update
    # set_album.update(album_params)
    # render json: @album, image_url: get_image_url
  end

  def destroy
    Album.find(params[:id]).destroy
  end

private

  def set_album
    @album = Album.find(params[:id])
  end

  def album_params
    params.permit(:id, :name, :description, :user_id)
  end
end
