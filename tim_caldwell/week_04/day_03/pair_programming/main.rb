require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @yes = "pass"
  @no = "write_test"
  @question = "Do you have a test for that?"
  erb :yesno
end

get '/write_test' do
  @task = "Write a test."
  @next = "pass"

  erb :done
end


get '/pass' do
  @yes = "refactor"
  @no = "write_code"
  @question = "Does the test pass?"
  erb :yesno
end

get '/write_code' do
  @task = "Write just enough code for the test to pass."
  @next = "pass"

  erb :done
end

get '/refactor' do
  @yes = "do_refactor"
  @no = "new_feature"
  @question = "Need to refactor?"
  erb :yesno
end

get '/do_refactor' do
  @task = "Refactor the code."
  @next = "pass"

  erb :done
end

get '/new_feature' do
  @task = "Select a new feature to implement."
  @next = ""

  erb :done
end