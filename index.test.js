// imports
const BinaryTree = require("./BinaryTree")
const Node = require("./BinaryTreeNode")

// create nodes
let root = new Node(2)
root.left = new Node(7)
root.right = new Node(5)
root.left.left = new Node(2)
root.left.right = new Node(6)
root.right.right = new Node(9)
root.left.right.left = new Node(5)
root.left.right.right = new Node(11)
root.right.right.left = new Node(4)

// create tree
let tree = new BinaryTree(root)

// depth
test("depth", () => {
    expect(tree.depth()).toBe(4)
})

// traverseBreadth
test("traverseBreadth", () => {
    expect(tree.traverseBreadth({direction: "right"})).toEqual([
        2,
        7,
        5,
        2,
        6,
        9,
        5,
        11,
        4,
    ])

    expect(tree.traverseBreadth({direction: "left"})).toEqual([
        2,
        5,
        7,
        9,
        6,
        2,
        4,
        11,
        5,
    ])
})

// traverseDepth
test("traverseDepth", () => {
    expect(tree.traverseDepth({order: "pre", direction: "right"})).toEqual([
        2,
        7,
        2,
        6,
        5,
        11,
        5,
        9,
        4,
    ])
    expect(tree.traverseDepth({order: "pre", direction: "left"})).toEqual([
        2,
        5,
        9,
        4,
        7,
        6,
        11,
        5,
        2,
    ])
    expect(tree.traverseDepth({order: "in", direction: "right"})).toEqual([
        2,
        7,
        5,
        6,
        11,
        2,
        5,
        4,
        9,
    ])
    expect(tree.traverseDepth({order: "in", direction: "left"})).toEqual([
        9,
        4,
        5,
        2,
        11,
        6,
        5,
        7,
        2,
    ])
    expect(tree.traverseDepth({order: "post", direction: "right"})).toEqual([
        2,
        5,
        11,
        6,
        7,
        4,
        9,
        5,
        2,
    ])
    expect(tree.traverseDepth({order: "post", direction: "left"})).toEqual([
        4,
        9,
        5,
        11,
        5,
        6,
        2,
        7,
        2,
    ])
})

// traversePreOrder
test("traversePreOrder", () => {
    expect(tree.traversePreOrder({direction: "right"})).toEqual([
        2,
        7,
        2,
        6,
        5,
        11,
        5,
        9,
        4,
    ])
    expect(tree.traversePreOrder({direction: "left"})).toEqual([
        2,
        5,
        9,
        4,
        7,
        6,
        11,
        5,
        2,
    ])
})

// traverseInOrder
test("traverseInOrder", () => {
    expect(tree.traverseInOrder({direction: "right"})).toEqual([
        2,
        7,
        5,
        6,
        11,
        2,
        5,
        4,
        9,
    ])
    expect(tree.traverseInOrder({direction: "left"})).toEqual([
        9,
        4,
        5,
        2,
        11,
        6,
        5,
        7,
        2,
    ])
})

// traversePostOrder
test("traversePostOrder", () => {
    expect(tree.traversePostOrder({direction: "right"})).toEqual([
        2,
        5,
        11,
        6,
        7,
        4,
        9,
        5,
        2,
    ])
    expect(tree.traversePostOrder({direction: "left"})).toEqual([
        4,
        9,
        5,
        11,
        5,
        6,
        2,
        7,
        2,
    ])
})
