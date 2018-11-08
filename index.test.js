// imports
const BinaryTree = require("./BinaryTree")
const Node = require("./BinaryTreeNode")

// create nodes
let root = new Node(29)
root.left = new Node(67)
root.left.right = new Node(12)
root.right = new Node(93)
root.right.left = new Node(100)
root.right.right = new Node(45)
root.right.right.right = new Node(18)

// create tree
let tree = new BinaryTree(root)

// depth
test("depth", () => {
    expect(tree.depth()).toBe(4)
})

// traverseBreadth
test("traverseBreadth", () => {
    expect(tree.traverseBreadth({direction: "right"})).toEqual([
        29,
        67,
        93,
        12,
        100,
        45,
        18,
    ])

    expect(tree.traverseBreadth({direction: "left"})).toEqual([
        29,
        93,
        67,
        45,
        100,
        12,
        18,
    ])
})

// traverseDepth
test("traverseDepth", () => {
    expect(tree.traverseDepth({order: "pre", direction: "right"})).toEqual([
        29,
        67,
        12,
        93,
        100,
        45,
        18,
    ])
    expect(tree.traverseDepth({order: "pre", direction: "left"})).toEqual([
        29,
        93,
        45,
        18,
        100,
        67,
        12,
    ])
    expect(tree.traverseDepth({order: "in", direction: "right"})).toEqual([
        67,
        12,
        29,
        100,
        93,
        45,
        18,
    ])
    expect(tree.traverseDepth({order: "in", direction: "left"})).toEqual([
        18,
        45,
        93,
        100,
        29,
        12,
        67,
    ])
    expect(tree.traverseDepth({order: "post", direction: "right"})).toEqual([
        12,
        67,
        100,
        18,
        45,
        93,
        29,
    ])
    expect(tree.traverseDepth({order: "post", direction: "left"})).toEqual([
        18,
        45,
        100,
        93,
        12,
        67,
        29,
    ])
})

// traversePreOrder
test("traversePreOrder", () => {
    expect(tree.traversePreOrder({direction: "right"})).toEqual([
        29,
        67,
        12,
        93,
        100,
        45,
        18,
    ])
    expect(tree.traversePreOrder({direction: "left"})).toEqual([
        29,
        93,
        45,
        18,
        100,
        67,
        12,
    ])
})

// traverseInOrder
test("traverseInOrder", () => {
    expect(tree.traverseInOrder({direction: "right"})).toEqual([
        67,
        12,
        29,
        100,
        93,
        45,
        18,
    ])
    expect(tree.traverseInOrder({direction: "left"})).toEqual([
        18,
        45,
        93,
        100,
        29,
        12,
        67,
    ])
})

// traversePostOrder
test("traversePostOrder", () => {
    expect(tree.traversePostOrder({direction: "right"})).toEqual([
        12,
        67,
        100,
        18,
        45,
        93,
        29,
    ])
    expect(tree.traversePostOrder({direction: "left"})).toEqual([
        18,
        45,
        100,
        93,
        12,
        67,
        29,
    ])
})
