class DevelopersController < ApplicationController
  def index
    @developers = Developer.all.order(:created_at)
  end

  def show
    @developer = Developer.find params[:id]
  end

  def edit
    @developer = Developer.find params[:id]
  end

  def update
    developer = Developer.find params[:id]
    developer.update developer_params
    redirect_to developer
  end

  def new
    @developer = Developer.new
  end

  def create
    developer = Developer.create developer_params
    redirect_to developer # GET the show page
  end

  def destroy
    developer = Developer.find params[:id]
    developer.destroy
    redirect_to developers_path
  end

  # Strong params: create a whitelist of permitted parameters
  private
  def developer_params
    params.require(:developer).permit(:name, :headquarters, :image)
  end
end
