class AnimalsController < ApplicationController
  def create
    @animal = Animal.create animal_params

    redirect_to @animal
  end

  def new
    @animal = Animal.new
  end

  def index
    @animals = Animal.all
  end

  def show
    @animal = Animal.find params[:id]
  end

  def edit
    @animal = Animal.find params[:id]
  end

  def update
    animal = Animal.find params[:id]
    animal.update animal_params

    redirect_to animal
  end

  def destroy
    Animal.find(params[:id]).destroy

    redirect_to animals_path
  end


  private
  def animal_params
    params.require(:animal).permit(:name, :description, :dob, :breed, :vaccinated, :shelter_id, :type_name, :state, :sex, :image, :colour)
  end
end
