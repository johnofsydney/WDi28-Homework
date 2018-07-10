require 'test_helper'

class SecretNumberControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get secret_number_index_url
    assert_response :success
  end

end
