class AnimalsController < ApplicationController
  before_action :set_animal, only: %i[show edit update destroy]

  # GET /animals
  # GET /animals.json
  def index
    @animals = Animal.all
  end

  # GET /animals/1
  # GET /animals/1.json
  def show; end

  # GET /animals/new
  def new
    @animal = Animal.new
  end

  # GET /animals/1/edit
  def edit; end

  # POST /animals
  # POST /animals.json
  def create
    @animal = Animal.new(animal_params)

    respond_to do |format|
      if @animal.save
        format.html { redirect_to @animal, notice: 'Animal was successfully created.' }
        format.json { render :show, status: :created, location: @animal }
      else
        format.html { render :new }
        format.json { render json: @animal.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /animals/1
  # PATCH/PUT /animals/1.json
  def update
    respond_to do |format|
      if @animal.update(animal_params)
        format.html { redirect_to @animal, notice: 'Animal was successfully updated.' }
        format.json { render :show, status: :ok, location: @animal }
      else
        format.html { render :edit }
        format.json { render json: @animal.errors, status: :unprocessable_entity }
      end
    end
  end
  def details
    # Get an animal record from the database using the ID in params.
    @animal = Animal.find(params[:id])

    # If we just want to return details of the record represented by the @animal object, we could now simply do:

    # render :json => @animal

    # But if we want to get details of OTHER records associated with the @animal object, we need to call .to_json on the @animal object, and specify what associated records we want to include, and what attributes of those associated records we want to include/exclude.
    @response = @animal.to_json(
  :methods => :climate,
  :include => {
    :species => {
      :except =>
        [:created_at, :updated_at],
      :include => {
        :habitat => {
          :only => :name
        }
      }
    }
  })

    # Then we render the response as :json. This lets Rails know to render a JSON object back to the browser, rather than an HTML view.

     render :json => @response
  # ...
end

  # DELETE /animals/1
  # DELETE /animals/1.json
  def destroy
    @animal.destroy
    respond_to do |format|
      format.html { redirect_to animals_url, notice: 'Animal was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_animal
    @animal = Animal.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def animal_params
    params.require(:animal).permit(:name, :color, :species_id)
  end


end
