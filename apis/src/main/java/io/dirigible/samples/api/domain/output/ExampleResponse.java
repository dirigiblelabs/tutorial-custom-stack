package io.dirigible.samples.api.domain.output;

import java.util.ArrayList;
import java.util.List;

import io.dirigible.samples.api.domain.Example;

public class ExampleResponse {

	private List<Example> examples = new ArrayList<>();

	public List<Example> getExamples() {
		return examples;
	}

	public void setExamples(List<Example> examples) {
		this.examples = examples;
	}

	public ExampleResponse withExamples(List<Example> examples) {
		setExamples(examples);
		return this;
	}
}
