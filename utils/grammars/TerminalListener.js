// Generated from Terminal.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TerminalParser.
function TerminalListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TerminalListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TerminalListener.prototype.constructor = TerminalListener;

// Enter a parse tree produced by TerminalParser#commandSequence.
TerminalListener.prototype.enterCommandSequence = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#commandSequence.
TerminalListener.prototype.exitCommandSequence = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#command.
TerminalListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#command.
TerminalListener.prototype.exitCommand = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#commandName.
TerminalListener.prototype.enterCommandName = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#commandName.
TerminalListener.prototype.exitCommandName = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#commandArgList.
TerminalListener.prototype.enterCommandArgList = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#commandArgList.
TerminalListener.prototype.exitCommandArgList = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#commandArg.
TerminalListener.prototype.enterCommandArg = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#commandArg.
TerminalListener.prototype.exitCommandArg = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#value.
TerminalListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#value.
TerminalListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#keyvalue.
TerminalListener.prototype.enterKeyvalue = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#keyvalue.
TerminalListener.prototype.exitKeyvalue = function(ctx) {
};


// Enter a parse tree produced by TerminalParser#key.
TerminalListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by TerminalParser#key.
TerminalListener.prototype.exitKey = function(ctx) {
};



exports.TerminalListener = TerminalListener;