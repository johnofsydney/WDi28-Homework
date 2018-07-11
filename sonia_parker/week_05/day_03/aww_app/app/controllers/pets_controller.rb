class PetsController < ApplicationController
  def index
    @pets = Pet.all
  end

  def new
      @pet = Pet.new
  end

  def edit
        @pet = Pet.find params[:id]
  end

  def create
  end

  def update
        @pet = Pet.find params[:id]
  end

  def show
    @pet = Pet.find params[:id]
  end

  def delete
        @pet = Pet.find params[:id]
  end
end
