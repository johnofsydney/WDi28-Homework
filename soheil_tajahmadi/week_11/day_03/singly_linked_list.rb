class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def prepend(value)
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value)
    last.next = Node.new value
  end

  def last
    node = @head
    while node && node.next
      node = node.next
    end
    node
  end

  def remove
    node = @head
    @head = @head.next
    node
  end

  def insert_a(node, new_value)

  end

  def find(needle)
    #return the node with the value of needle or nil
    node = @head
    while node
      if node.value == needle
        return node
      end
      node = node.next
    end
    return nil
  end

  def reverse
    # return a new SLL with the values from the previous in reverse order
    sllr = SinglyLinkedList.new
      each do |node|
          sllr.prepend(node.value)
      end
      sllr
  end

  def reverse!
    # destructive reverse

  end

  def each
    node = @head
    self.length.times do
      yield node
      if node
        node = node.next
      end
    end
  end

  def length
    counter = 0
    node = @head
    while node
      counter = counter + 1
      node = node.next
    end
    counter
  end

  def index val
    node = @head
    self.length.times do |i|
      if node.value == val
        return i
      end
      node = node.next
    end
    return -1
  end

  def at_index num
    node = @head
    self.length.times do |i|
      if i == num
        return node.value
      else
        node = node.next
      end
    end
    return nil
  end

  # also map, inject, .at_index

end

require 'pry'
bros = SinglyLinkedList.new 'Groucho'
bros.append "Harpo"
bros.append "Gummo"
bros.append "Chico"

binding.pry
